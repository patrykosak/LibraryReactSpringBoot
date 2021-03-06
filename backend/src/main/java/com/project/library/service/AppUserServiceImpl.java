package com.project.library.service;

import com.project.library.entity.AppUser;
import com.project.library.entity.Role;
import com.project.library.repository.AppUserRepository;
import com.project.library.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AppUserServiceImpl implements AppUserService, UserDetailsService {

    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findByEmail(email);
        if(appUser == null){
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        }
        else{
            log.info("User {} found in the database", email);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        appUser.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });
        return new org.springframework.security.core.userdetails.User(appUser.getEmail(), appUser.getPassword(), authorities);
    }

    @Override
    public AppUser saveAppUser(AppUser appUser) {
        log.info("Saving new user {} to the database", appUser.getName());
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        return appUserRepository.save(appUser);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving new role {}to the database", role.getName());
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String email, String roleName) {
        log.info("Adding role {} to user {}", roleName, email);
        AppUser appUser = appUserRepository.findByEmail(email);
        Role role = roleRepository.findByName(roleName);
        appUser.getRoles().add(role);
    }

    @Override
    public AppUser getAppUser(String email) {
        log.info("fetching user {} ", email);
        return appUserRepository.findByEmail(email);
    }

    @Override
    public List<AppUser> getAppUsers(String role) {
        log.info("fetching all users");
        return appUserRepository.findByRolesName(role);
    }

    @Override
    public void deleteUserByEmail(String email) {
        appUserRepository.deleteByEmail(email);
    }

    @Override
    public void updateAppUser(String email, AppUser appUser) {
        AppUser appUserDB = appUserRepository.findByEmail(email);

        if(Objects.nonNull(appUser.getName())&&!"".equalsIgnoreCase(appUser.getName())){
            appUserDB.setName(appUser.getName());
        }
        if(Objects.nonNull(appUser.getSurname())&&!"".equalsIgnoreCase(appUser.getSurname())){
            appUserDB.setSurname(appUser.getSurname());
        }
        if(Objects.nonNull(appUser.getEmail())&&!"".equalsIgnoreCase(appUser.getEmail())){
            appUserDB.setEmail(appUser.getEmail());
        }
        if(Objects.nonNull(appUser.getSchoolClass())&&!"".equalsIgnoreCase(appUser.getSchoolClass())){
            appUserDB.setSchoolClass(appUser.getSchoolClass());
        }

        appUserRepository.save(appUserDB);
    }

}
