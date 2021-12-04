SDIR := src
JDIR := js

NAME := $(JDIR)/main.js

SRC := $(shell find $(SDIR) -name *.ts -type f)
JS := $(patsubst $(SDIR)/%.ts,$(JDIR)/%.js,$(SRC))

NPX := npx tsc

.PHONY: all
all: $(JS)

# Only runs NPX if files have been updated
$(JS): $(SRC)
	@$(NPX)

.PHONY: run
run: $(JS)
	node $(NAME)

.PHONY: clean re
clean:
	$(RM) -r $(JDIR)

re: clean
	$(MAKE) all
