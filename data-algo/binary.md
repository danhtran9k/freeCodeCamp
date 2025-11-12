# Định nghĩa chuẩn
[3, 3, 3, 7, 7, 10, 10, 10, 12, 15, 15, 15, 15]
 0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12

Condition		            Name (math / algorithm)	
min arr[i] ≥ target     Lower bound
min arr[i] > target     Upper bound
max arr[i] < target     Predecessor / Strict predecessor
max arr[i] ≤ target     Floor (hoặc “inclusive predecessor”)

Tức là trường hợp target là chặn trên ko có tên chính thức
Và trong thực tế sẽ tính toán (theo template chuẩn) bằng cách - 1 đi

Các comment về cận trong binary template ko chuẩn, chỉ là cách nhìn để dễ hình dung

# Định nghĩa trong custom library
“lower bound” trong thuật toán (nhất là binary search của C++ STL, Python, v.v.)
và trong toán học KHÔNG GIỐNG NHAU.

Tuy nhiên trong các thư viện khác nhau đôi khi lại define khác nhau
https://datastructures-js.info/docs/binary-search-tree

-> lower hiểu target là cận trên, upper là cận dưới 


