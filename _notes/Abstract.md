---
tags: preliminaries
---
{:.boxit}
I have a deep conviction that mathematics is about ideas, not just formulas and algorithms, and not just theorems and proofs.

<p class="drop-cap">
Hai mục tiêu cần đạt được khi tìm hiểu về một định lý: [[hiểu phát biểu::highlight]] và hiểu chứng minh. Mục tiêu thứ nhất quan trọng hơn mục tiêu thứ hai. Để làm được điều này cần sự thông hiểu về ngôn ngữ toán học bao gồm ký hiệu và quy tắc về cách sử dụng ký hiệu. 
</p>

Giống như các ngôn ngữ khác, ngôn ngữ của toán cũng có một số ký hiệu và quy tắc thường xuyên được sử dụng. Phần này sẽ giới thiệu về chúng và đưa ra một số chỉ dẫn giúp bạn đọc toán hiệu quả.

Phương pháp học ngôn ngữ thứ hai hiệu quả là bên cạnh việc củng cố ngữ pháp thì thường xuyên trau dồi vốn từ vựng cũng vô cùng cần thiết. Do đó, công thức học ngôn ngữ toán hiệu quả thực sự không tồn tại với những ai ngại tìm hiểu.

## Symbols and rules
___

### Logics

Mệnh đề toán học là một khẳng định toán học chỉ có thể đúng hoặc sai, không thể nhập nhằng, nghĩa là không thể vừa đúng vừa sai, cũng không thể vừa không đúng vừa không sai. 
> $$2<3$$ là một mệnh đề toán học đúng, $$3>4$$ là một mệnh đề toán học sai.

Thông thường, ta hay gặp mệnh đề được phát biểu có dạng lượng từ phổ biến, ký hiệu là $$\forall$$ và lượng từ tồn tại, ký hiệu là $$\exists$$ — tồn tại một phần tử hoặc $$\exists!$$ — tồn tại duy nhất một phần tử hoặc $$\nexists$$ — không tồn tại phần tử.
> Mọi phần tử $$x$$ của tập hợp $$X$$ đều có tính chất $$\mathcal{P}(x)$$ được viết gọn là $$\forall x \in X, \mathcal{P}(x)$$.
<br>
<br>
Tồn tại một phần tử $$x$$ của tập hợp $$X$$ có tính chất $$\mathcal{P}(x)$$ được viết gọn là $$\exists x \in X, \mathcal{P}(x)$$.

Khi với giả thiết mệnh đề $$A$$ đúng ta chứng minh được mệnh đề $$B$$ cũng đúng thì ta nói mệnh đề $$A$$ suy ra hay kéo theo mệnh đề $$B$$. Để diễn đạt ý đó ta viết gọn là $$A \Rightarrow B$$ hay $$B \Leftarrow A$$. Lúc này ta nói $$A$$ là điều kiện đủ để có $$B$$ và $$B$$ là điều kiện cần để có $$A$$. 
> $$( \lvert a \rvert < b) \Rightarrow (b>0)$$ nhưng từ $$b>0$$ không suy ra được $$ \lvert a \rvert < b $$.

Khi $$A \Rightarrow B$$ đồng thời $$B \Rightarrow A$$, thì ta nói mệnh đề $$A$$ tương đương mệnh đề $$B$$. Để diễn đạt ý đó ta viết gọn là $$A \Leftrightarrow B$$. Lúc này ta nói $$A$$ là điều kiện cần và đủ để có $$B$$, $$B$$ cũng là điều kiện cần và đủ để có $$A$$.

Phủ định của mệnh đề $$A$$ là một mệnh đề, ký hiệu là $$\overline{A}$$, đúng khi $$A$$ sai và sai khi $$A$$ đúng. Để diễn đạt ý đó ta viết gọn là $$\overline{A}=1-A$$.
> Phủ định của mệnh đề $$\forall x \in X, \mathcal{P}(x)$$ là tồn tại một phần tử $$x$$ của tập hợp $$X$$ không có tính chất $$\mathcal{P}(x)$$ ta viết gọn là $$\overline{\forall x \in X, \mathcal{P}(x)} \equiv \exists x \in X, \overline{\mathcal{P}(x)}$$.
<br>
<br>
Phủ định của mệnh đề $$\exists x \in X, \mathcal{P}(x)$$ là với mọi phần tử $$x$$ thuộc $$X$$ không có tính chất $$\mathcal{P}(x)$$ ta viết gọn là $$\overline{\exists x \in X, \mathcal{P}(x)} \equiv \forall x \in X, \overline{\mathcal{P}(x)}$$. 


### Sets

Symbol | LaTeX code | Comment | Example
--- | --- | --- | ---
$$ \land $$ | `\land` | Và
$$ \lor $$ | `\lor` | Hoặc
$$ \rightarrow $$ | `\rightarrow` | Phép kéo theo
$$ \leftrightarrow $$ | `\leftrightarrow` | Phép kéo theo 2 chiều 
$$ := $$ | `:=` | Định nghĩa bởi

```python
# more python code
```

## Tips reading mathematics
___

Chúng ta đã quen với việc đọc một văn bản văn học thuần túy theo chiều từ trái sang phải. Tuy nhiên, cách đọc của toán lại không hoàn toàn như vậy, một vài trường hợp đòi hỏi chúng ta cần phải đọc 2 chiều, thậm chí là 3 chiều. Ví dụ

$$\sum_{k=1}^{n}a_{i,k}b_{k,j}$$

Lúc đầu, chúng ta có thể đọc biểu thức này thành một biểu thức tuyến tính như sau:

$$c_{i,j}=\sum_{k=1}^{n}a_{i,k}b_{k,j}=a_{i,1}b_{1,j}+a_{i,2}b_{2,j}+ \cdots +a_{i,n}b_{n,j}$$
