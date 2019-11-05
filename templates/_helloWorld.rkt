
;;; Racket - Nexss Programmer 2.0
;;; Default Template 
#lang racket/base

(define (author) "Marcin Polak mapoart@gmail.com")

(require json)
(define NexssStdin null)

(let 
    ([contents (read-line)]) 
    (if (string=? contents "") 
        (read-line) 
        (let () 
            (set! NexssStdin (string->jsexpr contents))
            ;;;  (hash-ref NexssStdin `cwd) 
            ;;;  (define NexssStdout (hash-set NexssStdin 'test "test"))
             (define NexssStdout (hash-set NexssStdin 'OutputFromRacket (version)))
                (write-json NexssStdout)
             )))  
        ;;; (hash-ref x `cwd) GET DATA
        ;;; (define x2 (hash-set x 'test "test")) SET DATA