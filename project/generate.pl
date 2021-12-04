use warnings;
use strict;

sub printTestcase {
	my $rows = $_[0];
	my $cols = $_[1];
	my $got_one = 0;

	print "$rows $cols\n";
	for ((1..$rows)) {
		for ((1..$cols)) {
			my $val = int(rand(2));
			if ($val == 1) {
				$got_one = 1;
			} elsif ($_ == $cols && $got_one == 0) {
				$val = 1;
			}
			print $val;
		}
		print("\n");
	}
}

sub generateTestcases {
	my $testcases = $_[0];
	my $MAX_VALUE = $_[1];

	print "$testcases\n";
	for ((1..$testcases)) {
		my $rows = 1 + int(rand($MAX_VALUE));
		my $cols = 1 + int(rand($MAX_VALUE));
		printTestcase($rows, $cols);
	}
}

my $testcases = 1;
my $MAX_VALUE = 182;

if (@ARGV >= 1) {
	$testcases = int($ARGV[0]);
}
if (@ARGV == 2) {
	$MAX_VALUE = int($ARGV[1]);
}

generateTestcases($testcases, $MAX_VALUE);
