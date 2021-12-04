# make && perl generate.pl $@ > input.txt && cat input.txt | node js/main.js
make && cat input.txt | node js/main.js
