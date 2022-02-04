package com.project.library.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class PublishingHouse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long publishingHouseId;

    @NotBlank
    @Length(max=50)
    private String name;
    private String city;

}
