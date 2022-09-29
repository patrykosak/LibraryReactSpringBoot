package com.project.library.common;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

@Configuration
class TimeConfig {

    @Bean
    TimeSupplier timeSupplier() {
        return LocalDateTime::now;
    }
}
