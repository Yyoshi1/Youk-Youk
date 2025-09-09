import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/modules_provider.dart';
import 'providers/role_provider.dart';
import 'widgets/role_switcher.dart';

void main() {
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => ModulesProvider()),
      ChangeNotifierProvider(create: (_) => RoleProvider()),
    ],
    child: TripsApp(),
  ));
}

class TripsApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TripsApp',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: RoleSwitcher(),
    );
  }
}
