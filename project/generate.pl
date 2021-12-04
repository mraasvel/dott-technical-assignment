use warnings;
use strict;

my $rows = 182;
my $cols = 182;

my @i = (1..$rows);
my @j = (1..$cols);

print "1\n";;
print "$rows $cols\n";

for (@i) {
	for (@j) {
		print int(rand(2));
	}
	print "\n";
}
