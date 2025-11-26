const database = 'mekanbul';
use(database);
db.venues.insertOne(
{
  "name": "starbucks",
  "address": "Iyaş Market Yanı",
  "rating": 5,
  "foodanddrink": [
    "kahve",
    "kurabiye",
    "sandviç"
  ],
  "coordinates": [
    37.83226584629666,
    30.524732239878013
  ],
  "hours": [
    {
      "days": "Pazartesi-Cumartesi",
      "open": "9:00",
      "close": "23:00",
      "isClosed": false
    },
    {
      "days": "Pazar",
      "open": "11:00",
      "close": "17:00",
      "isClosed": false
    }
  ]
}
);

use(database);
db.venues.insertOne(
{
  "name": "Gloria jeans",
  "address": "Iyaş Avm Karşısı",
  "rating":4,
  "foodanddrink": [
    "kahve",
    "çay",
    "kurabiye"
  ],
  "coordinates": [
    37.832265846297806,
    32.524732239878013
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "9:00",
      "close": "23:00",
      "isClosed": false
    },
    {
      "days": "Cumartesi-Pazar",
      "open": "12:00",
      "close": "23:59",
      "isClosed": false
    }
  ]
}
 );

use(database);
db.venues.insertOne(
{
  "name": "Kahve Dünyası",
  "address": "Iyaş Avm İçi",
  "rating": 3,
  "foodanddrink": [
    "kahve",
    "pasta",
    "çikolata"
  ],
  "coordinates": [
    31.832259749708976,
    33.843794709029803
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "9:00",
      "close": "23:00",
      "isClosed": false
    },
    {
      "days": "Cumartesi-Pazar",
      "open": "11:00",
      "close": "23:00",
      "isClosed": false
    }
  ]
}
 );

use(database);
db.venues.insertOne(
{
  "name": "brew Mood",
  "address": "Iyaş Market Starbuck Yanı",
  "rating": 2,
  "foodanddrink": [
    "kahve",
    "kurabiye",
    "sandviç"
  ],
  "coordinates": [
    36.943849829349666,
    30.524737483794783
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "9:00",
      "close": "23:00",
      "isClosed": false
    },
    {
      "days": "cumartesi-Pazar",
      "open": "10:00",
      "close": "23:00",
      "isClosed": false
    }
  ]
}
 );

use(database);
db.venues.insertOne(
{
  "name": "U1 Coffee",
  "address": "Iyaş Avm yanı",
  "rating": 1,
  "foodanddrink": [
    "kahve",
    "çay",
    "kurabiye"
  ],
  "coordinates": [
    37.374897847984936,
    29.748787239878013
  ],
  "hours": [
    {
      "days": "Pazartesi-Cuma",
      "open": "9:00",
      "close": "23:00",
      "isClosed": false
    },
    {
      "days": "cumartesi-Pazar",
      "open": "10:00",
      "close": "21:00",
      "isClosed": false
    }
  ]
}
 );
