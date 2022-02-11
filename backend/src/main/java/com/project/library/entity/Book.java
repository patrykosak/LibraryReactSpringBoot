package com.project.library.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

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
    private String ISBN;
    @NotBlank
    @Length(max=50)
    private String Title;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date ReleaseDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date AcquisitionDate;

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
