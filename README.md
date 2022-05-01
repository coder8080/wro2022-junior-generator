# WRO-2022 Junior Generot

An arrangement generator for [junior WRO-2022 nomination](https://wro-association.org/competition/2022-season/#rules).

Gihub pages: [link](https://coder8080.github.io/wro2022-junior-generator/)

# Run project

You have not to run the project by yourself, you can visit it at
[github pages](https://coder8080.github.io/wro2022-junior-generator/).

But if you want to make any changes or you prefer to run site directly on
your computer, here are the instructions.

At first, you need to clone the code (if you haven't done it yet) and
install required dependences

```bash
git clone https://github.com/coder8080/wro2022-junior-generator
cd elecar
npm i
```

## Development mode

To start the project in development mode, run:

```bash
npm start
```

This will start a development server as well as open site in the browser.
If you aren't going to make any changes to the code, then I advice you to
consider production mode instead of development.

## Production mode

Production build has less weight and work faster than development, but it
needs some time to compile.

To create a production build, run:

```bash
npm run build
```

Wait for the process to finish. After that, you will have your compiled files
in the build folder in the root of the project. You can serve them with every
tool for serving static files like serve, nginx, etc.

If you want to use [serve](https://www.npmjs.com/package/serve), use following commands:

```bash
npm i serve -g
serve -s build -p 3000
```

Note that in this case, you will need to open `http://localhost:3000`
by yourself.

# Troubleshoot

If you have found any issues, you can write me about them [here](https://github.com/coder8080/wro2022-junior-generator/issues).
