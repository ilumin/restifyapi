# restifyapi

	restify-api ❯❯❯ docker run -it --rm --net=restifyapi_default ilumin/wrk -t12 -c400 -d30s http://172.20.0.2:8080/test-param/ilumin
	Running 30s test @ http://172.20.0.2:8080/test-param/ilumin
	  12 threads and 400 connections
	  Thread Stats   Avg      Stdev     Max   +/- Stdev
	    Latency   188.95ms   42.35ms 490.38ms   92.22%
	    Req/Sec   184.13     89.50   333.00     54.73%
	  62237 requests in 30.08s, 8.73MB read
	Requests/sec:   2068.81
	Transfer/sec:    296.99KB
