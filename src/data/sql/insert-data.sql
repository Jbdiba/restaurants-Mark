INSERT INTO 
  Restaurant(name, image_link)
VALUES
  ("McDonald's", "http://mcdo.com/image.png"),
  ("Burger King", "http://bk.com/image.png");

INSERT INTO 
  Menu(restaurant_id, title)
VALUES
  (1, "McDonald's Menu"),
  (2, "Burger King's Menu");

INSERT INTO 
  Menu_Item(menu_id, name, price)
VALUES
  (1, "Big Mac", 4.50),
  (1, "Cheeseburger", 1.70),
  (1, "French Fries", 2.10),
  (2, "Whopper", 1.99),
  (2, "Double Whopper", 3.40),
  (2, "French Fries", 2.20);