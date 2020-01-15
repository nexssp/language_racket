# Racket Help - Nexss PROGRAMMER 2.0

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Some examples

Below Based on: <https://www.reddit.com/r/Racket/comments/778qkf/let_let_and_letrec/>

```rkt

(let ([a 1] [b 2] [c 3]) body...)
((lambda (a b c) body...) 1 2 3)

(let* ([a 1] [b 2] [c 3]) body...)
(let ([a 1])
  (let ([b 2])
    (let ([c 3])
      body...)))

(letrec ([a 1] [b 2] [c 3]) body...)
((lambda ()
   (define a nil)
   (define b nil)
   (define c nil)
   (set! a 1)
   (set! b 2)
   (set! c 3)
   body...))

```

## Links

### Youtube

[Racket Programming - Introduction to Racket: calling and defining functions, if, cond](https://www.youtube.com/watch?v=FoPW4Ji6EAM)  
[lambdas and Conditionals (Scheme programming)](https://www.youtube.com/watch?v=U6PNEbc6Q20)

### Websites

[Racket Cheatsheet](https://docs.racket-lang.org/racket-cheat/index.html)  
[Learn X in Y Minutes - Racket](https://learnxinyminutes.com/docs/racket/)
