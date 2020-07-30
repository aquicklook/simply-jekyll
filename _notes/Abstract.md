---
tags: preliminaries
---
{:.boxit}
I have a deep conviction that mathematics is about ideas, not just formulas and algorithms, and not just theorems and proofs.

<p class="drop-cap">
Hai mục tiêu cần đạt được khi tìm hiểu về một định lý: [[hiểu phát biểu::highlight]] và hiểu chứng minh. Mục tiêu thứ nhất quan trọng hơn mục tiêu thứ hai. Để làm được điều này cần sự thông hiểu về ngôn ngữ toán học bao gồm ký hiệu và quy tắc về cách sử dụng ký hiệu. 
</p>

Giống như các ngôn ngữ khác, ngôn ngữ của toán cũng có một số ký hiệu và quy tắc thường xuyên được sử dụng. Phần này sẽ giới thiệu về chúng và đưa ra một số chỉ dẫn về đọc toán.

Phương pháp để thành thạo ngôn ngữ thứ hai là bên cạnh việc củng cố ngữ pháp thì phải thường xuyên trau dồi vốn từ vựng. Do đó, công thức học toán hiệu quả thực sự không tồn tại với những ai ngại tìm hiểu.

## Proposition and logical
___

Mệnh đề hay mệnh đề logic là một phát biểu khẳng định một sự kiện nào đó, sao cho khẳng định đó chỉ nhận một trong hai giá trị hoặc đúng hoặc sai, không thể nhập nhằng, nghĩa là không thể vừa đúng vừa sai, cũng không thể vừa không đúng vừa không sai.

Ví dụ: $$2<3$$ là một mệnh đề đúng. $$3>4$$ là một mệnh đề sai. $$x+y=z$$ không phải là một mệnh đề vì nó chẳng đúng cũng chẳng sai vì các biến ở đây chưa được gán cho một giá trị cụ thể nào.

Giá trị đúng, sai của một mệnh đề được gọi là chân trị của mệnh đề đó. Chân trị của mệnh đề đúng ký hiệu là $$T$$ $$(\mathbf{true})$$, chân trị của mệnh đề sai ký hiệu là $$F$$ $$(\mathbf{false})$$.

Khi với giả thiết mệnh đề $$A$$ đúng ta chứng minh được mệnh đề $$B$$ cũng đúng thì ta nói mệnh đề $$A$$ suy ra mệnh đề $$B$$, ký hiệu là $$A \Rightarrow B$$ hay $$B \Leftarrow A$$. Lúc này ta nói $$A$$ là điều kiện đủ để có $$B$$ và $$B$$ là điều kiện cần để có $$A$$. [[$$( \lvert a \rvert < b) \Rightarrow (b>0)$$ nhưng từ $$b>0$$ không suy ra được $$ \lvert a \rvert < b $$.::srs]] Đồng thời, với giả thiết mệnh đề $$B$$ đúng ta cũng chứng minh được mệnh đề $$A$$ đúng thì ta nói mệnh đề $$A$$ tương đương mệnh đề $$B$$, ký hiệu là $$A \Leftrightarrow B$$. Lúc này ta nói $$A$$, $$B$$ lần lượt là điều kiện cần và đủ để có $$B$$, $$A$$.

Phủ định của mệnh đề $$A$$ là một mệnh đề, ký hiệu là $$\overline{A}$$ hay $$\neg{A}$$, đúng khi $$A$$ sai và sai khi $$A$$ đúng.[[$$\overline{\forall x \in X, \mathcal{P}(x)} \equiv \exists x \in X, \overline{\mathcal{P}(x)}$$
<br>
$$\overline{\exists x \in X, \mathcal{P}(x)} \equiv \forall x \in X, \overline{\mathcal{P}(x)}$$::srs]] Hội của hai mệnh đề $$A, B$$ là một mệnh đề, đọc là $$A$$ và $$B$$, ký hiệu $$A \land B$$ hay $$A \cdot B$$, đúng khi cả hai mệnh đề $$A, B$$ cùng đúng và sai trong các trường hợp còn lại. Tuyển của hai mệnh đề $$A, B$$ là một mệnh đề, đọc là $$A$$ hoặc $$B$$, ký hiệu là $$A \lor B$$ hay $$A + B$$, sai khi cả hai mệnh đề cùng sai và đúng trong trường hợp còn lại. $$A$$ kéo theo $$B$$ là một mệnh đề, ký hiệu là $$A \rightarrow B$$, chỉ sai khi $$A$$ đúng và $$B$$ sai và đúng trong các trường hợp còn lại. $$A$$ tương đương $$B$$ là một mệnh đề, ký hiệu là $$A\leftrightarrow B$$, nếu cả hai mệnh đề $$A$$ và $$B$$ cùng đúng hoặc cùng sai.

Bảng 1. Bảng giá trị chân lý của các phép toán logic

$$\begin{array} {|c|c|c|c|c|c|c|} \hline
A & B & \overline{A} & A\land B & A\lor B & A\rightarrow B & A\leftrightarrow B \\ \hline 
1 & 1 & 0 & 1 & 1 & 1 & 1 \\ \hline
1 & 0 & 0 & 0 & 1 & 0 & 0 \\ \hline
0 & 1 & 1 & 0 & 1 & \color{Red} 1 & 0 \\ \hline
0 & 0 & 1 & 0 & 0 & 1 & 1 \\ \hline
\end{array}$$


## Tips reading mathematics
___

Chúng ta đã quen với việc đọc một văn bản văn học thuần túy theo chiều từ trái sang phải. Tuy nhiên, cách đọc của toán không hoàn toàn như vậy, một vài trường hợp đòi hỏi chúng ta cần phải đọc 2 chiều, thậm chí là 3 chiều. Ví dụ

$$\sum_{k=1}^{n}a_{i,k}b_{k,j}$$

Lúc đầu, chúng ta có thể đọc biểu thức này thành một biểu thức tuyến tính như sau:

$$c_{i,j}=\sum_{k=1}^{n}a_{i,k}b_{k,j}=a_{i,1}b_{1,j}+a_{i,2}b_{2,j}+ \cdots +a_{i,n}b_{n,j}$$
