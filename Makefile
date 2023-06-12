run:
    docker run -d -p 5000:5000 --env-file .env --name sn-api --rm sn-api
stop:
	docker stop sn-api
