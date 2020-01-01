cat temp | sed -r 's/"([^,]*)"/\n["\1", require("..\/assets\/Sounds\/Harp\/\1.mp3")]/g'
