
#lang racket/base

(define (author) "Marcin Polak")

(require json)

(call-with-input-file "data.json" read-json)


;;; (string->jsexpr "{ \"foo\": 42 }")

(with-output-to-string
    (λ () (write-json #hasheq((waffle . (1 2 3))))))

(define 
    (my-read-line) 
    (let 
        ([contents 
            (read-line)]) 
        (if 
            (string=? contents "") 
            (read-line) contents)))