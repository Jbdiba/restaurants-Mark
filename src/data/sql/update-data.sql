UPDATE Menu_Item
SET category="Appetizers"
WHERE name = "French Fries";

UPDATE Menu_Item
SET category="Burgers"
WHERE name != "French Fries";