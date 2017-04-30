wordpress
--

1. ダウンロードする

https://wordpress.org/

2. ./appに展開する

3. docker-compose up

### メモ

DBのエラーが出た場合、./dbを修正する必要がある

Railsのコマンドのメモ。

```
docker-compose run rails rake db:create
docker-compose run rails rake db:migrate
```
