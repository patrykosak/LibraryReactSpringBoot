package com.project.library.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

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

    private Date borrowDate;

    private Date deadline;

    private Date returnDate;

    private String status;

    @ManyToOne
    @JoinColumn(
            referencedColumnName = "userId"
    )
    private AppUser reader;

    @ManyToOne
    @JoinColumn(
            referencedColumnName = "ISBN"
    )
    private Book book;

}
