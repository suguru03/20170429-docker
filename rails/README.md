# Docker for Rails Example

## Get Started

Prepare database.

```
$ docker-compose up -d
$ docker-compose run rails rake db:create db:migrate
$ docker-compose stop
```

Then up and open `http://localhost`.

```
$ docker-compose up
```

## Problems?

### When Rails complains a server is already running 

```
rails_1  | A server is already running. Check /myapp/tmp/pids/server.pid.
rails_1  | => Booting Puma
rails_1  | => Rails 5.0.0.1 application starting in development on http://0.0.0.0:80
rails_1  | => Run `rails server -h` for more startup options
rails_1  | Exiting
rails_rails_1 exited with code 1
```

You need to remove the pid file.

```
$ rm tmp/pids/server.pid
```

Then run `docker-compose up` as usual.
