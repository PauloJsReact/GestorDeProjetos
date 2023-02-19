<?php
// estabelecer conexão com o banco de dados
$mysqli = new mysqli("db", "root", "example", "mydb");

// verificar conexão
if ($mysqli->connect_errno) {
  echo "Falha ao conectar ao MySQL: " . $mysqli->connect_error;
  exit();
}

// executar consulta SQL para obter os dados
$query = "SELECT * FROM Usuarios";
$result = $mysqli->query($query);

// verificar se há resultados
if ($result->num_rows > 0) {
  // percorrer os resultados e criar um array de dados
  $data = array();
  while ($row = $result->fetch_assoc()) {
    $data[] = $row;
  }

  // converter os dados em JSON
  $json = json_encode($data);

  // exibir o resultado
  echo $json;
} else {
  echo "Não há resultados.";
}

// fechar conexão com o banco de dados
$mysqli->close();
?>
