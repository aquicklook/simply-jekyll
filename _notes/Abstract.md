---
tags: preliminaries
---
{:.boxit}
I have a deep conviction that mathematics is about ideas, not just formulas and algorithms, and not just theorems and proofs.

![alt text](https://www.expii.com/client/apps/solve/16/16.1.png "Reading mathematics")

<p class="drop-cap">
Có hai phần khi tìm hiểu về một định lý: [[hiểu tuyên bố::highlight]] và hiểu chứng minh. Phần thứ nhất quan trọng hơn phần thứ hai. Để làm được điều này cần sự thông hiểu về ngôn ngữ toán học bao gồm ký hiệu và quy tắc về cách sử dụng ký hiệu. 
</p>

Giống như các ngôn ngữ khác, ngôn ngữ của toán cũng có một số ký hiệu và quy tắc thường xuyên được sử dụng. Phần này sẽ giới thiệu về chúng và đưa ra một số chỉ dẫn giúp bạn đọc hiệu quả.

Tương tự như việc học tiếng anh, bên cạnh củng cố ngữ pháp, việc thường xuyên trau dồi vốn từ vựng cũng vô cùng cần thiết. Do đó, công thức học toán hiệu quả thực sự không tồn tại với những ai ngại tìm hiểu.


Symbol | LaTeX | Comment
--- | --- | ---
$$ \exists $$ | `\exists` | Tồn tại ít nhất một
$$ \exists $$! | `\exists!` | Tồn tại một và chỉ một
$$ \nexists $$ | `\nexists` | Không tồn tại
$$ \forall $$ | `\forall` | Với mọi
$$ \neg $$ | `\neg` | Không
$$ \land $$ | `\land` | Và
$$ \lor $$ | `\lor` | Hoặc
$$ \Rightarrow $$ | `\Rightarrow` | Suy ra
$$ \Leftrightarrow $$ | `\Leftrightarrow` | Tương đương
$$ \rightarrow $$ | `\rightarrow` | Phép kéo theo
$$ \leftrightarrow $$ | `\leftrightarrow` | Phép kéo theo 2 chiều
$$ := $$ | `:=` | Định nghĩa bởi

## Tips reading mathematics
___

Chúng ta đã quen với việc đọc một văn bản văn học thuần túy theo chiều từ trái sang phải. Tuy nhiên, cách đọc của toán lại không hoàn toàn như vậy, một vài trường hợp đòi hỏi chúng ta cần phải đọc 2 chiều, thậm chí là 3 chiều. Ví dụ:

$$\sum_\{k=1}^{n} a_{i,k}b_{k,j}$$

Chúng ta đọc là tổng của $$a_{i,k}$$ nhân với $$b_{k,j}$$ với $$k$$ chạy từ $$1$$ đến $$n$$. 

Lúc đầu, chúng ta có thể đọc biểu thức này thành một biểu thức tuyến tính như sau:

$$c_{i,j}=\sum_{k=1}^{n}a_{i,k}b_{k,j}=a_{i,1}b_{1,j}+a_{i,2}b_{2,j}+ \cdots +a_{i,n}b_{n,j}$$


$$\begin{align}
\int^\pi_0x^2\cos(nx)\cot\left(\frac{x}{2}\right)\ {\rm d}x
&=-{\rm Re}\int_C\frac{z+1}{z-1}z^{n-1}\ln^2{z}\ {\rm d}z\\
&=(-1)^{n}\int^1_0\frac{1-x}{1+x}x^{n-1}(\ln^2{x}-\pi^2)\ {\rm d}x

&-\int^1_0\frac{1+x}{1-x}x^{n-1}\ln^2{x}\ {\rm d}x\\
\end{align}$$
