INSERT INTO Restaurant(name, image_link)
VALUES("McDonald's", "http://mcdo.com/image.png");

INSERT INTO Restaurant(name, image_link)
VALUES("Burger King", "http://bk.com/image.png");

INSERT INTO Menu(restaurant_id, title)
VALUES(1, "McDonald's Menu");

INSERT INTO Menu(restaurant_id, title)
VALUES(2, "Burger King's Menu");

INSERT INTO Menu_Item(menu_id, name, price)
VALUES(1, "Big Mac", 4.50);

INSERT INTO Menu_Item(menu_id, name, price)
VALUES(1, "Cheeseburger", 1.70);

INSERT INTO Menu_Item(menu_id, name, price)
VALUES(1, "French Fries", 2.10);

INSERT INTO Menu_Item(menu_id, name, price)
VALUES(2, "Whopper", 1.99);

INSERT INTO Menu_Item(menu_id, name, price)
VALUES(2, "Double Whopper", 3.40);

INSERT INTO Menu_Item(menu_id, name, price)
VALUES(2, "French Fries", 2.20);