package com.project.library.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Borrow {

    @Id
    @SequenceGenerator(name = "borrow_sequence",
    sequenceName = "borrow_sequence",
    allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
    generator = "borrow_sequence")
    private Long borrowId;

    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate borrowDate;

    private LocalDate deadline;

    private LocalDate returnDate;

    private String status;

    @ManyToOne
    @JoinColumn(
            referencedColumnName = "email"
    )
    private AppUser reader;

    @ManyToOne
    @JoinColumn(
            referencedColumnName = "ISBN"
    )
    private Book book;

}
