# Password generator for windows

A command-line password generator made in NodeJS

## Usage

### Windows executable

Download it from [releases]("release_link")

Use it as:

```bash
passwordgen.exe generate
Your password with 8 characters is:
m:DnUTZuO
```

### From source

- Clone this repo

```bash
> git clone <this_repo> passwordgen
```

- install dependencies

```bash
> npm install
```

- run

```bash
> npm start generate
Your password with 8 characters is:
zo&t1+n:f 
> npm start generate -- -l 16
Your password with 16 characters is:
.cXv&[bQxm]=myU{w  

```

## OPTIONS

```shell
Usage: passwordgen [options] [command]

Password generator made in NodeJS

Options:
  -h, --help          display help for command

Commands:
  generate [options]  generate a new password
  help [command]      display help for command 
```