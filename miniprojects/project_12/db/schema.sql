drop database if exists movies_db;
create database movies_db;

use movies_db;

create table movies(
    id int not null auto_increment,
    title varchar(100) not null,
    aarp_rating varchar(5), 
    rotten_tomatoes_rating int,
    primary key(id)
);

create table reviews(
    id int not null auto_increment,
    movie_id int not null,
    author varchar(100),
    rating smallint not null,
    review_text text not null,
    date_created date,
    foreign key(movie_id) references movies(id),
    primary key(id)
);