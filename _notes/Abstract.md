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

Mệnh đề toán học là một khẳng định toán học chỉ có thể đúng hoặc sai, không thể nhập nhằng, nghĩa là không thể vừa đúng vừa sai, cũng không thể vừa không đúng vừa không sai.[[$$2<3$$ là một mệnh đề đúng, $$3>4$$ là một mệnh đề sai.::srs]]

Thông thường, ta hay gặp mệnh đề được phát biểu có dạng lượng từ phổ biến, ký hiệu là $$\forall$$ và lượng từ tồn tại, ký hiệu là $$\exists$$ — tồn tại hoặc $$\exists!$$ — tồn tại duy nhất hoặc $$\nexists$$ — không tồn tại.[[Mọi phần tử $$x$$ của tập $$X$$ đều có tính chất $$\mathcal{P}(x)$$ được viết gọn là $$\forall x \in X, \mathcal{P}(x)$$.
<br>
Tồn tại một phần tử $$x$$ của tập $$X$$ có tính chất $$\mathcal{P}(x)$$ được viết gọn là $$\exists x \in X, \mathcal{P}(x)$$.::srs]]

Khi với giả thiết mệnh đề $$A$$ đúng ta chứng minh được mệnh đề $$B$$ cũng đúng thì ta nói mệnh đề $$A$$ suy ra hay kéo theo mệnh đề $$B$$, ký hiệu là $$A \Rightarrow B$$ hay $$B \Leftarrow A$$. Lúc này ta nói $$A$$ là điều kiện đủ để có $$B$$ và $$B$$ là điều kiện cần để có $$A$$. [[$$( \lvert a \rvert < b) \Rightarrow (b>0)$$ nhưng từ $$b>0$$ không suy ra được $$ \lvert a \rvert < b $$.::srs]]

Khi $$A \Rightarrow B$$ đồng thời $$B \Rightarrow A$$, thì ta nói mệnh đề $$A$$ tương đương mệnh đề $$B$$, ký hiệu là $$A \Leftrightarrow B$$. Lúc này ta nói $$A$$ là điều kiện cần và đủ để có $$B$$, $$B$$ cũng là điều kiện cần và đủ để có $$A$$.

Phủ định của mệnh đề $$A$$ là một mệnh đề, ký hiệu là $$\overline{A}$$ hay $$\neg{A}$$, đúng khi $$A$$ sai và sai khi $$A$$ đúng. Để diễn đạt ý đó ta viết gọn là $$\overline{A}=1-A$$.[[$$\overline{\forall x \in X, \mathcal{P}(x)} \equiv \exists x \in X, \overline{\mathcal{P}(x)}$$.
<br>
$$\overline{\exists x \in X, \mathcal{P}(x)} \equiv \forall x \in X, \overline{\mathcal{P}(x)}$$.::srs]]

Hội của hai mệnh đề $$A, B$$ là một mệnh đề, đọc là $$A$$ và $$B$$, ký hiệu $$A \land B$$ hoặc $$A \cdot B$$, đúng khi cả hai mệnh đề $$A, B$$ cùng đúng và sai trong các trường hợp còn lại, hay $$\left (A \land B  \right ) = \mathrm{min}\left \{A, B \right\}$$. Tính chất của phép hội là 

Tuyển của hai mệnh đề $$A, B$$ là một mệnh đề đọc là $$A$$ hoặc $$B$$, ký hiệu là $$A \lor B$$ hoặc $$A + B$$, sai khi cả hai mệnh đề cùng sai và đúng trong trường hợp còn lại, hay $$\left (A \lor B  \right ) = \mathrm{max}\left \{A, B \right\}$$.

$$A$$ kéo theo $$B$$ là một mệnh đề, ký hiệu là $$A \rightarrow B$$, chỉ sai khi $$A$$ đúng và $$B$$ sai và đúng trong các trường hợp còn lại, hay $$\left ( A\rightarrow B \right )=\textrm{max}\left \{ 1-A,B \right \}$$.

$$A$$ tương đương $$B$$ là một mệnh đề, ký hiệu là $$A\leftrightarrow B$$, nếu cả hai mệnh đề $$A$$ và $$B$$ cùng đúng hoặc cùng sai.

> **Các tính chất của phép hội, tuyển, kéo theo và tương đương**
<br>
1. Tính giao hoãn
<br>
$$A \land B \Leftrightarrow B\land A$$, $$A \lor B \Leftrightarrow B\lor A$$
<br>
2. Tính kết hợp
<br>
$$\left (A \land B  \right )\land C \Leftrightarrow A \land \left (B \land C  \right )$$, $$\left (A \lor B  \right )\lor C \Leftrightarrow A \lor \left (B \lor C  \right )$$
<br>
3. Tính phân phối
<br>
$$A \land \left ( B\lor C \right )\Leftrightarrow \left (A \land B  \right ) \lor \left (A \land C  \right )$$, $$A \lor \left ( B\land C \right )\Leftrightarrow \left (A \lor B  \right ) \land \left (A \lor C  \right )$$
<br>
4. Tính chất của phép kéo theo
<br>
$$A\rightarrow B\Leftrightarrow \overline{A} \lor B$$
<br>
5. Tính chất của phép tương đương
<br> 
$$A\leftrightarrow B\Leftrightarrow \left ( A\rightarrow B \right )\land\left ( B\rightarrow A \right )$$


### Sets

Symbol | LaTeX code | Comment | Example
--- | --- | --- | ---
$$ := $$ | `:=` | Định nghĩa bởi

## Tips reading mathematics
___

Chúng ta đã quen với việc đọc một văn bản văn học thuần túy theo chiều từ trái sang phải. Tuy nhiên, cách đọc của toán không hoàn toàn như vậy, một vài trường hợp đòi hỏi chúng ta cần phải đọc 2 chiều, thậm chí là 3 chiều. Ví dụ

$$\sum_{k=1}^{n}a_{i,k}b_{k,j}$$

Lúc đầu, chúng ta có thể đọc biểu thức này thành một biểu thức tuyến tính như sau:

$$c_{i,j}=\sum_{k=1}^{n}a_{i,k}b_{k,j}=a_{i,1}b_{1,j}+a_{i,2}b_{2,j}+ \cdots +a_{i,n}b_{n,j}$$
