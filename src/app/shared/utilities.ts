export class Portfolio {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;

  constructor(
    gender: string,
    name: Name,
    location: Location,
    email: string,
    login: Login,
    dob: Dob,
    registered: Registered,
    phone: string,
    cell: string,
    id: Id,
    picture: Picture,
    nat: string
  ) {
    this.gender = gender;
    this.name = name;
    this.location = location;
    this.email = email;
    this.login = login;
    this.dob = dob;
    this.registered = registered;
    this.phone = phone;
    this.cell = cell;
    this.id = id;
    this.picture = picture;
    this.nat = nat;
  }
}

export class Name {
  title: string;
  first: string;
  last: string;

  constructor(title: string, first: string, last: string) {
    this.title = title;
    this.first = first;
    this.last = last;
  }
}

export class Street {
  number: number;
  name: string;

  constructor(number: number, name: string) {
    this.number = number;
    this.name = name;
  }
}

export class Coordinates {
  latitude: string;
  longitude: string;

  constructor(latitude: string, longitude: string) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export class Timezone {
  offset: string;
  description: string;

  constructor(offset: string, description: string) {
    this.offset = offset;
    this.description = description;
  }
}

export class Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;

  constructor(
    street: Street,
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: Coordinates,
    timezone: Timezone
  ) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postcode = postcode;
    this.coordinates = coordinates;
    this.timezone = timezone;
  }
}

export class Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;

  constructor(
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
  ) {
    this.uuid = uuid;
    this.username = username;
    this.password = password;
    this.salt = salt;
    this.md5 = md5;
    this.sha1 = sha1;
    this.sha256 = sha256;
  }
}

export class Dob {
  date: Date;
  age: number;

  constructor(date: Date, age: number) {
    this.date = date;
    this.age = age;
  }
}

export class Registered {
  date: Date;
  age: number;

  constructor(date: Date, age: number) {
    this.date = date;
    this.age = age;
  }
}

export class Id {
  name: string;
  value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

export class Picture {
  large: string;
  medium: string;
  thumbnail: string;

  constructor(large: string, medium: string, thumbnail: string) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
  }
}

export class Info {
  seed: string;
  results: number;
  page: number;
  version: string;

  constructor(seed: string, results: number, page: number, version: string) {
    this.seed = seed;
    this.results = results;
    this.page = page;
    this.version = version;
  }
}
