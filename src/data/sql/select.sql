SELECT * FROM Restaurant;

SELECT * FROM Menu;

SELECT * FROM Menu_Item;

SELECT 
  name,
  ROUND(AVG(price), 2) AS AvgFrenhFriesPrice
FROM Menu_Item
WHERE name = "French Fries"
GROUP BY name;

SELECT 
  category,
  ROUND(AVG(price), 2) AS AvgCategoryPrice
FROM Menu_Item
GROUP BY category;

SELECT
  Restaurant.id,
  Restaurant.name AS restaurant_name,
  Menu_Item.name,
  price
FROM Menu_Item
LEFT JOIN Menu on Menu.id = menu_id
LEFT JOIN Restaurant on Restaurant.id = Menu.restaurant_id;


SELECT
  restaurant_name,
  ROUND(AVG(price), 2) AS AvgRestaurantPrice
FROM (
  SELECT
    Restaurant.id,
    Restaurant.name AS restaurant_name,
    Menu_Item.name,
    price
  FROM Menu_Item
  LEFT JOIN Menu on Menu.id = menu_id
  LEFT JOIN Restaurant on Restaurant.id = Menu.restaurant_id
)
GROUP BY restaurant_name;