import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MetafitGUI extends JFrame {

    private JTextField nomeField;
    private JTextField emailField;
    private JPasswordField senhaField;
    private JTextArea resultadoArea;

    public MetafitGUI() {

        setTitle("Metafit - Interface Gráfica");
        setSize(500, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JPanel painel = new JPanel();
        painel.setLayout(null);
        painel.setBackground(new Color(15, 23, 42));

        JLabel titulo = new JLabel("METAFIT");
        titulo.setBounds(170, 20, 200, 40);
        titulo.setForeground(new Color(0, 255, 136));
        titulo.setFont(new Font("Arial", Font.BOLD, 32));

        JLabel subtitulo = new JLabel("Seu App de Treinos");
        subtitulo.setBounds(150, 60, 250, 30);
        subtitulo.setForeground(Color.WHITE);
        subtitulo.setFont(new Font("Arial", Font.PLAIN, 18));

        JLabel nomeLabel = new JLabel("Nome:");
        nomeLabel.setBounds(50, 120, 100, 25);
        nomeLabel.setForeground(Color.WHITE);

        nomeField = new JTextField();
        nomeField.setBounds(50, 150, 380, 40);
        nomeField.setFont(new Font("Arial", Font.PLAIN, 16));

        JLabel emailLabel = new JLabel("Email:");
        emailLabel.setBounds(50, 210, 100, 25);
        emailLabel.setForeground(Color.WHITE);

        emailField = new JTextField();
        emailField.setBounds(50, 240, 380, 40);
        emailField.setFont(new Font("Arial", Font.PLAIN, 16));

        JLabel senhaLabel = new JLabel("Senha:");
        senhaLabel.setBounds(50, 300, 100, 25);
        senhaLabel.setForeground(Color.WHITE);

        senhaField = new JPasswordField();
        senhaField.setBounds(50, 330, 380, 40);
        senhaField.setFont(new Font("Arial", Font.PLAIN, 16));

        JButton cadastrarBtn = new JButton("Cadastrar");
        cadastrarBtn.setBounds(50, 400, 170, 45);
        cadastrarBtn.setBackground(new Color(0, 255, 136));
        cadastrarBtn.setForeground(Color.BLACK);
        cadastrarBtn.setFont(new Font("Arial", Font.BOLD, 16));

        JButton limparBtn = new JButton("Limpar");
        limparBtn.setBounds(260, 400, 170, 45);
        limparBtn.setBackground(new Color(0, 195, 255));
        limparBtn.setForeground(Color.BLACK);
        limparBtn.setFont(new Font("Arial", Font.BOLD, 16));

        resultadoArea = new JTextArea();
        resultadoArea.setBounds(50, 470, 380, 60);
        resultadoArea.setEditable(false);
        resultadoArea.setFont(new Font("Arial", Font.PLAIN, 14));

        cadastrarBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                String nome = nomeField.getText();
                String email = emailField.getText();
                String senha = new String(senhaField.getPassword());

                if(nome.isEmpty() || email.isEmpty() || senha.isEmpty()) {

                    JOptionPane.showMessageDialog(null,
                            "Preencha todos os campos!");

                } else {

                    resultadoArea.setText(
                            "Cadastro realizado com sucesso!\n" +
                            "Nome: " + nome + "\n" +
                            "Email: " + email
                    );

                    JOptionPane.showMessageDialog(null,
                            "Usuário cadastrado!");
                }
            }
        });

        limparBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                nomeField.setText("");
                emailField.setText("");
                senhaField.setText("");
                resultadoArea.setText("");
            }
        });

        painel.add(titulo);
        painel.add(subtitulo);

        painel.add(nomeLabel);
        painel.add(nomeField);

        painel.add(emailLabel);
        painel.add(emailField);

        painel.add(senhaLabel);
        painel.add(senhaField);

        painel.add(cadastrarBtn);
        painel.add(limparBtn);

        painel.add(resultadoArea);

        add(painel);
    }

    public static void main(String[] args) {

        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new MetafitGUI().setVisible(true);
            }
        });
    }
}
