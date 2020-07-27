---
tags: preliminaries
---
{:.boxit}
I have a deep conviction that mathematics is about ideas, not just formulas and algorithms, and not just theorems and proofs.

<p class="drop-cap">
Hai mục tiêu cần đạt được khi tìm hiểu về một định lý: [[hiểu tuyên bố::highlight]] và hiểu chứng minh. Mục tiêu thứ nhất quan trọng hơn mục tiêu thứ hai. Để làm được điều này cần sự thông hiểu về ngôn ngữ toán học bao gồm ký hiệu và quy tắc về cách sử dụng ký hiệu. 
</p>

Giống như mọi ngôn ngữ khác, ngôn ngữ của toán cũng có một số ký hiệu và quy tắc thường xuyên được sử dụng. Phần này sẽ giới thiệu về chúng và đưa ra một số chỉ dẫn giúp bạn đọc hiệu quả.

Tương tự như việc học tiếng anh, bên cạnh củng cố ngữ pháp, việc thường xuyên trau dồi vốn từ vựng là điều vô cùng cần thiết. Do đó, công thức học toán hiệu quả thực sự không tồn tại với những ai ngại tìm hiểu.


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

Chúng ta đã quen với việc đọc một văn bản văn học thuần túy theo chiều từ trái sang phải. Tuy nhiên, cách đọc của toán lại không hoàn toàn như vậy, một vài trường hợp đòi hỏi chúng ta cần phải đọc 2 chiều, thậm chí là 3 chiều. Ví dụ $$\sum_{k=1}^{n}a_{i,k}b_{k,j}$$. Lúc đầu, chúng ta có thể đọc biểu thức này thành một biểu thức tuyến tính như sau:

$$c_{i,j}=\sum_{k=1}^{n}a_{i,k}b_{k,j}=a_{i,1}b_{1,j}+a_{i,2}b_{2,j}+ \cdots +a_{i,n}b_{n,j}$$

$$\begin{align}
I_\nu(\nu^{-1},1)
&=\int^\frac{\pi}{2}_0\frac{x^2}{\tan{x}(\cos^2{x}+\nu^2\sin^2{x})}{\rm d}x\\
&=\frac{1}{4}\int^\pi_0\frac{x^2}{\tan\left(\frac{x}{2}\right)(1+(1-\nu^2)\cos{x}+\nu^2)}{\rm d}x\\
&=\frac{1}{8\nu}\int^\pi_0\left(x^2\cot\left(\frac{x}{2}\right)+2\sum^\infty_{n=1}\left(\frac{\nu-1}{\nu+1}\right)^nx^2\cos(nx)\cot\left(\frac{x}{2}\right)\right){\rm d}x\\
&=\frac{\pi^2}{4\nu}\ln{2}-\frac{7\zeta(3)}{8\nu}-\frac{\xi}{4\nu}\left(\int^1_0\frac{1-x}{(1+x)(1+\xi x)}(\ln^2{x}-\pi^2)+\frac{1+x}{(1-x)(1-\xi x)}\ln^2{x}\ {\rm d}x\right)
\end{align}$$
