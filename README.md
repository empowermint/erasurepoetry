# erasurepoetry
A one-page app that generates erasure poetry

View the live site here: https://empowermint.github.io/erasurepoetry/

## What and why

My friend Josie tweeted that she was looking for a script that would create erasue poetry from any given text... so I made one.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I would very much love to see this generalised: a scipt to take any given text and randomly erase a percentage range of words in it.<a href="https://t.co/uSDABwxvwm">https://t.co/uSDABwxvwm</a></p>&mdash; Josie Giles (@HJosephineGiles) <a href="https://twitter.com/HJosephineGiles/status/1461339271328145412?ref_src=twsrc%5Etfw">November 18, 2021</a></blockquote>

In addition to Josie's requests, I added the following requirements:
- the poetry must be displayed with correct indentation (an ongoing problem on the web!)
- the erasures must be continuous, like an analogue erasure poem
- the script-using website must be mobile friendly

You can learn more about erasure poetry here: https://en.wikipedia.org/wiki/Erasure_(artform)

## How

In order to make the erasures from the poem contiguous (other digital versions of erasues tend to have gaps where the space characters in the original would have been), the app actually erases all of the poem by default, and marks the sections to be revealed using `<mark>` tags.
  
I liked the idea of `<mark>` tags because although the natural way to think about erasue poetry is choosing which words to erase from the original poem, in fact what is significant is what words are retained. 

## What next?

  1. Currently the script identifies how many words to reveal based on the percentage set by the user, and then chooses them at random. This means that someties the script chooses the same word to reveal more than once, resulting in the wrong number of words being revealled overall.

  2. I'd like to find a way to make the erasure accessibly to screenreader software, so that users will hear the revealed words of the source poem only.
  
  3. I'd like to better display the erasure percentage selected from the slider to the user so they can check they have selected the right number.
  
  4. The app could be more usable for users with less knowledge of poetry or technology!
  
  5. The typography displays fine for traditional line-based poetry, but the generated stanza breaks are just empty lines. I'd like to replace these with `<p>` tags to improve the semantic quality of the generated HTML, and to allow for more customisable display.
