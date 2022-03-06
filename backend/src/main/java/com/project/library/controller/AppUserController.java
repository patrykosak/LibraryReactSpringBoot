package com.project.library.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.library.entity.AppUser;
import com.project.library.entity.Role;
import com.project.library.service.AppUserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    private final AppUserService appUserService;

    @GetMapping("/users")
    public ResponseEntity<List<AppUser>> getUsers(@RequestParam(required = false, defaultValue = "") String role){
        return ResponseEntity.ok().body(appUserService.getAppUsers(role));
    }

    @PostMapping("/user/save")
    public AppUser saveUser(@RequestBody AppUser appUser){
       AppUser a = appUserService.saveAppUser(appUser);
         appUserService.addRoleToUser(appUser.getEmail(),"USER");;
        return a;
    }

    @PostMapping("/user/admin/save")
    public ResponseEntity<AppUser> saveAdmin(@RequestBody AppUser appUser){
        appUserService.saveAppUser(appUser);
        appUserService.addRoleToUser(appUser.getEmail(),"ADMIN");
        return ResponseEntity.ok().build();
    }

    @PutMapping("/user/update/{id}")
    public ResponseEntity<AppUser> updateAppUser(@PathVariable("id") String email, @RequestBody AppUser appUser){
        appUserService.updateAppUser(email, appUser);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<AppUser> deleteUserByEmail(@PathVariable("id") String email){
        appUserService.deleteUserByEmail(email);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
        return ResponseEntity.created(uri).body(appUserService.saveRole(role));
    }

    @PostMapping("/role/addtouser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form){
        appUserService.addRoleToUser(form.getEmail(),form.getRoleName());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                AppUser user = appUserService.getAppUser(username);
                String access_token = JWT.create()
                        .withSubject(user.getEmail())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                        .withClaim("roles", user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                        .sign(algorithm);
                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token",access_token);
                tokens.put("refresh_token",refresh_token);
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);

            }
            catch (Exception exception) {
                response.setHeader("error", exception.getMessage());
                response.setStatus(HttpStatus.FORBIDDEN.value());
                //response.sendError(HttpStatus.FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", exception.getMessage());
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Refresh token is missing");
        }
    }

}

@Data
class RoleToUserForm {
    private String email;
    private String roleName;
}
