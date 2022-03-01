package com.project.library;

import com.project.library.controller.AppUserController;
import com.project.library.entity.AppUser;
import com.project.library.entity.Role;
import com.project.library.security.PasswordEncoder;
import com.project.library.service.AppUserServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class LibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryApplication.class, args);
	}

//	@Bean
//	BCryptPasswordEncoder bCryptPasswordEncoder() {
//		return new BCryptPasswordEncoder();
//	}


	CommandLineRunner run(AppUserController appUserController, AppUserServiceImpl appUserService){
		return args -> {
			appUserController.saveRole(new Role(null,"ROLE_USER"));
			appUserController.saveRole(new Role(null,"ROLE_ADMIN"));


			appUserService.addRoleToUser("john","ROLE_ADMIN");
		};
	}


}
