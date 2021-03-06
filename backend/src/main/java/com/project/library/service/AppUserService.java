package com.project.library.service;

import com.project.library.entity.AppUser;
import com.project.library.entity.Role;

import java.util.List;

public interface AppUserService {
    AppUser saveAppUser(AppUser appUser);
    Role saveRole(Role role);
    void addRoleToUser(String email, String roleName);
    AppUser getAppUser(String email);
    List<AppUser> getAppUsers(String role);

    void deleteUserByEmail(String email);

    void updateAppUser(String email, AppUser appUser);
}
