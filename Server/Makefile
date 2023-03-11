build:
	docker-compose build --compress

clean:
	docker system prune -f -a --filter "until=24h"

start:
	docker-compose up web

start-local:
	docker-compose -f docker-compose.dev.yml up --build

down:
	docker-compose down --remove-orphans

