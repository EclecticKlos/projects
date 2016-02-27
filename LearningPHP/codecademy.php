<!DOCTYPE html>
<html>
    <head>
    <title> Challenge Time! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
  </head>
  <body>
      <p>
      <?php
        class Vehicle {
          final public function honk() {
            return "HONK HONK!";
          }
        }
        // Add your code below!
        class Bicycle extends Vehicle {
          public function honk() {
            return "Beep beep!";
          }
        }

        $bicycle = new Bicycle();
        echo $bicycle->honk();

      ?>
      </p>
    </body>
</html>


<!DOCTYPE html>
<html>
    <head>
    <title> Challenge Time! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
  </head>
  <body>
      <p>
      <?php
        class Person {
          public static function say() {
            echo "Here are my thoughts!";
          }
        }

        class Blogger extends Person {
          const cats = 50;
        }

        Blogger::say();
        echo Blogger::cats;
      ?>
      </p>
    </body>
</html>
