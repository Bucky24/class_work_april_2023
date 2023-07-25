insert into movies(title, aarp_rating, rotten_tomatoes_rating) values
    ("The Matrix", "R", 100),
    ("The Fountain", "65+", -10),
    ("Barbie (the new one)", "10+", 100);

insert into reviews(movie_id, author, rating, review_text, date_created) values
    (1, "Neo", 10, "Woah", "2023-5-6"),
    (1, "The Architect", 3, "Flawed", "2023-5-6"),
    (2, "Monique", 0, "Didn't see it", "2023-5-6"),
    (2, "Santa Claus", 10, "Ho ho ho", "2023-5-6"),
    (3, "Class", 10, "It was a movie", "2023-5-6"),
    (3, "Ken", 20, "Hiya Barbie", "2023-5-6");