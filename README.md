# 20170429 Dockerやってみよう会

おれに教えてくれる人を増やすため、とりあえず興味ありそうな人に始めてもらう会です。終わったらちゃんと自習して将来おれに教えてくださいよろしくお願いします。

## 事前準備

目的は動く環境をちゃんと用意しておくことと、事前にファイルをダウンロードして会場の環境に負荷をかけないことなので、わからないことがあれば聞いてください。

以下のステップで作業してください。

1. Docker本体のインストール
2. ディレクトリ作成
3. `docker-compose.yml` ファイルを作成
4. はじめてのコンテナ起動

### Docker本体のインストール

こちらから "Docker CE" とか "Community Edition" とか、なんとかそういうのをインストールしてください。

- [The Docker Platform](https://www.docker.com/community-edition)

GUIです、大丈夫です。

### ディレクトリ作成

作業用にひとつディレクトリを作成して、コンソールで開いてください。 `cd` でアレするやつ。

### `docker-compose.yml` ファイルを作成

以下の内容でファイルを作成してください。コピペでどうぞ。ダウンロードでもいいです。

- [docker-compose.yml](https://raw.githubusercontent.com/ginpei/20170429-docker/master/all/docker-compose.yml)

```yml
version: "3"

services:
  nginx:
    image: nginx:1.12
    command: "true"
  php:
    image: php:7.0-fpm
    command: "true"
  mysql:
    image: mysql:5.7
    command: "true"
  rails:
    image: ruby:2.3.3
    command: "true"
  db:
    image: postgres:9.6.2
    command: "true"
  node:
    image: node:6.10.2
    command: "true"
```

### はじめてのコンテナ起動

コンソールで作成したディレクトリへ移動して、以下のコマンドで起動します。初回はめっちゃダウンロードして、めっちゃ時間かかります。漫画でも読んでててください。

```bash
$ docker-compose up
```

放置しとけばそのうち終わります。終わったら、もう一度同じコマンドで実行してみてください。多分こんな↓のがめっちゃカラフルな感じで出てくるはずです。

```bash
$ docker-compose up
Starting all_mysql_1
Starting all_db_1
Starting all_php_1
Starting all_rails_1
Starting all_nginx_1
Starting all_node_1
Attaching to all_nginx_1, all_db_1, all_node_1, all_rails_1, all_php_1, all_mysql_1
all_nginx_1 exited with code 0
all_php_1 exited with code 0
all_rails_1 exited with code 0
all_db_1 exited with code 0
all_node_1 exited with code 0
all_mysql_1 exited with code 0
```

全部 `0` なら成功。胸を張って来てください。
