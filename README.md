<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://www.gatsbyjs.com">
    <img src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" alt="Logo" width="80">
  </a>

<h3 align="center">gatsby-plugin-pdf-export</h3>

  <p align="center">
    Export PDF versions of pages at build time
    <br />
   </p>
</div>

## Getting Started
### Installation
```
npm i gatsby-plugin-pdf-export
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
In your gatsby-config.js:
```
{
    plugins: [
        {
            resolve: 'gatsby-plugin-pdf-export',
            options: {
                targetPaths: []
            }
        }
    ]
}
```

### Options

#### Target Paths
List of paths to generate PDFs for.
```
options: {
    targetPaths: ['/', '/events/']
}
```

#### Output Path
Directory to store generated PDF files
```
options: {
    outputPath: 'public/pdfs'
}
```

#### Output Prefix
Prefix for generated PDF files
```
options: {
    outputPrefix: 'printable-'
}
```

#### PDF Options
PDF options passed directly to Puppeteer. See https://pptr.dev/api/puppeteer.pdfoptions
```
options: {
    pdfOptions: {
        scale: 2
    }
}
```

#### Style Options
Style tag options passed directly to Puppeteer. See https://pptr.dev/api/puppeteer.frameaddstyletagoptions
```
options: {
    styleOptions: {
        content: '.copy { margin: 5em; }'
    }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments
* [Gatsby JS](https://gatsbyjs.com)
* [gatsby-plugin-pdf](https://github.com/lundegaard/gatsby-plugin-pdf)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
