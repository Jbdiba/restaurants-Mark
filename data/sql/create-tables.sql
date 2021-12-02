CREATE TABLE IF NOT EXISTS restaurant_rategory(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS restaurant(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category_id,
  image_link TEXT,
  description TEXT
  FOREIGN KEY(restaurant_id) REFERENCES restaurant_category(id)
);

CREATE TABLE IF NOT EXISTS tax(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
  taxrate REAL NOT NUll,
  start_date TEXT NOT NULL,
  end_date TEXT,
);

CREATE TABLE IF NOT EXISTS address(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  street1 TEXT NOT NULL,
  street2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT NOT NULL,
);

CREATE TABLE IF NOT EXISTS restaurant_location(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  restaurant_id INTEGER NOT NULL,
  address_id INTEGER NOT NULL,
  tax_id_id INTEGER NOT NULL,
  name TEXT,
  tax_id INTEGER NOT NULL,
  FOREIGN KEY(restaurant_id) REFERENCES restaurant(id),
  FOREIGN KEY(address_id) REFERENCES address(id)
  FOREIGN KEY(tax_id) REFERENCES tax(id)
);

CREATE TABLE IF NOT EXISTS menu(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  location_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT,
  FOREIGN KEY(location_id) REFERENCES restaurant_location(id),
  FOREIGN KEY(type_id) REFERENCES type(id)
);


CREATE TABLE IF NOT EXISTS menu(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  location_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT,
  FOREIGN KEY(location_id) REFERENCES restaurant_location(id),
  FOREIGN KEY(type_id) REFERENCES Type(id)
);

CREATE TABLE IF NOT EXISTS food_item(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description INTEGER NOT NULL,
  calories INTEGER,
);

CREATE TABLE IF NOT EXISTS menu_item(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  menu_id INTEGER,
  food_item_id INTEGER NOT NULL,
  category_id INTEGER
  name TEXT NOT NULL,
  price REAL NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT,
  FOREIGN KEY(menu_id) REFERENCES Menu(id),
  FOREIGN KEY jest,
  FOREIGN KEY(menu_id) REFERENCES Menu(id)
);

CREATE TABLE IF NOT EXISTS food_item(
  AUTOINCREMENT,
  name TEXT NOT NULL,
  description INTEGER NOT NULL,
  calories INTEGER,
);
