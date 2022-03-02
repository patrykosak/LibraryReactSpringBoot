package com.project.library.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class News {

    @SequenceGenerator(name = "news_sequence",
    sequenceName = "news_sequence",
    allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
    generator = "news_sequence")
    @Id
    private Long newsId;

    private LocalDate date;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @ManyToOne
    @JoinColumn(
            referencedColumnName = "userId"
    )
    private AppUser creator;
}
