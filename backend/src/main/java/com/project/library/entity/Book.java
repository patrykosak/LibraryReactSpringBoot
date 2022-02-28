package com.project.library.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book {

    @Id
    @Length(min=13,max=13)
    private String ISBN;
    @NotBlank
    @Length(max=50)
    private String title;
    private int releaseYear;
    private int amount;
    private String url;
    private String description;


    @ManyToOne
    @JoinColumn(
            referencedColumnName = "categoryId"
    )
    private Category category;

    @ManyToOne
    @JoinColumn(
            referencedColumnName = "publishingHouseId"
    )
    private PublishingHouse publishingHouse;

    @ManyToOne
    @JoinColumn(
            referencedColumnName = "authorId"
    )
    private Author author;
}
