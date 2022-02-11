package com.project.library.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class PublishingHouse {

    @Id
    @SequenceGenerator(
            name = "publishing_house_sequence",
            sequenceName = "publishing_house_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "publishing_house_sequence"
    )
    private Long publishingHouseId;

    @NotBlank
    @Length(max=50)
    private String name;
    private String city;

}
