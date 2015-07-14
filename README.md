# CofraCalendar
******

## ¿Qué es CofraCalendar?
Es un pequeño proyecto a partir del cual quiero hacer algunas aplicaciones, tanto para escritorio como para dispositivos móviles.
La idea es unir todas las convocatorias cofrades de Granada en un mismo sitio y que se ordenen en función de la fecha (además de mostrar algunos datos como precio, lugar...) y que se vayan dejando de mostrar cuando hayan pasado.


## ¿Cómo funciona?
En la rama gh-pages de este repositorio, tienes un fichero llamado "convocatorias.json".
En él se guardan todas las convocatorias que hay. Las aplicaciones leen este JSON y muestran las
convocatorias.

Para generar el JSON, [hay disponible una pequeña aplicación Javascript](http://iblancasa.com/CofraCalendar/convocatorias.html).
Lee las convocatorias, descarta las pasadas y permite añadir nuevas (ordenándolas por fecha). En el panel de abajo se genera el JSON que tendremos como resultado. Subiremos este JSON en nuestra rama master (convocatorias.json, también) y se pasarán algunos test. Después se subirá a la rama gh-pages y tendremos nuestras convocatorias actualizadas.


## ¿Qué se puede hacer con CofraCalendar?
Aunque yo lo voy a utilizar para eventos relacionados con la Semana Santa de Granada, puedes adaptarlo a cualquier temática de eventos

## Licencia
[Está disponible con licencia GPLv3](LICENSE)
