# Installing Nu

There are lots of ways to get Nu up and running. You can download pre-built binaries from our [release page](https://github.com/nushell/nushell/releases), [use your favourite package manager](https://repology.org/project/nushell/versions), or build from source.

The main Nushell binary is named `nu` (or `nu.exe` on Windows). After installation, you can launch it by typing `nu`.

## Pre-built binaries

Nu binaries are published for Linux, macOS, and Windows [with each GitHub release](https://github.com/nushell/nushell/releases). Just download, extract the binaries, then copy them to a location on your PATH.

## Package managers

Nu is available via several package managers:

[![Packaging status](https://repology.org/badge/vertical-allrepos/nushell.svg)](https://repology.org/project/nushell/versions)

For macOS and Linux, [Homebrew](https://brew.sh/) is a popular choice (`brew install nushell`).

For Windows:

- [Winget](https://docs.microsoft.com/en-us/windows/package-manager/winget/) (`winget install nushell`)
- [Chocolatey](https://chocolatey.org/) (`choco install nushell`)
- [Scoop](https://scoop.sh/) (`scoop install nu`)

Cross Platform installation:

- [npm](https://www.npmjs.com/) (`npm install -g nushell` Note that nu plugins are not included if you install in this way)

## Build from source

You can also build Nu from source. First, you will need to set up the Rust toolchain and its dependencies.

### Installing a compiler suite

For Rust to work properly, you'll need to have a compatible compiler suite installed on your system. These are the recommended compiler suites:

- Linux: GCC or Clang
- macOS: Clang (install Xcode)
- Windows: MSVC (install [Visual Studio](https://visualstudio.microsoft.com/vs/community/) or the [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022))
  - Make sure to install the "Desktop development with C++" workload
  - Any Visual Studio edition will work (Community is free)

### Installing Rust

If you don't already have Rust on our system, the best way to install it is via [rustup](https://rustup.rs/). Rustup is a way of managing Rust installations, including managing using different Rust versions.

Nu currently requires the **latest stable (1.66.1 or later)** version of Rust. The best way is to let `rustup` find the correct version for you. When you first open `rustup` it will ask what version of Rust you wish to install:

Once you are ready, press 1 and then enter.

If you'd rather not install Rust via `rustup`, you can also install it via other methods (e.g. from a package in a Linux distro). Just be sure to install a version of Rust that is 1.66.1 or later.

### Dependencies

#### Debian/Ubuntu

You will need to install the "pkg-config" and "libssl-dev" package:

#### RHEL based distros

You will need to install "libxcb", "openssl-devel" and "libX11-devel":

#### macOS

Using [Homebrew](https://brew.sh/), you will need to install "openssl" and "cmake" using:

### Build using [crates.io](https://crates.io)

Nu releases are published as source to the popular Rust package registry [crates.io](https://crates.io/). This makes it easy to build and install the latest Nu release with `cargo`:

That's it! The `cargo` tool will do the work of downloading Nu and its source dependencies, building it, and installing it into the cargo bin path.

If you want to install with support for [dataframes](dataframes.md), you can install using the `--features=dataframe` flag.

### Building from the GitHub repository

You can also build Nu from the latest source on GitHub. This gives you immediate access to the latest features and bug fixes. First, clone the repo:

From there, we can build and run Nu with:

You can also build and run Nu in release mode, which enables more optimizations:

People familiar with Rust may wonder why we do both a "build" and a "run" step if "run" does a build by default. This is to get around a shortcoming of the new `default-run` option in Cargo, and ensure that all plugins are built, though this may not be required in the future.
