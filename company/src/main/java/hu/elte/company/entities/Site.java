package hu.elte.company.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Site {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @Column
    @Enumerated(EnumType.STRING)
     private Type type;

    enum Type{
        HR,
        INFORMATICS,
        FACTORY
    }

    @OneToMany(mappedBy = "place")
    private List<Material> materials;

    @OneToMany(mappedBy = "site")
    private List<Worker> workers;

}
