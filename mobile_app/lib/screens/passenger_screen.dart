import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/modules_provider.dart';

class PassengerScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final modules = Provider.of<ModulesProvider>(context);
    return Scaffold(
      appBar: AppBar(title: Text("Passenger Dashboard")),
      body: ListView(
        children: [
          if (modules.vipEnabled) ListTile(title: Text("Book VIP Trip")),
          if (modules.sharedEnabled) ListTile(title: Text("Book Shared Trip")),
          if (modules.ecoEnabled) ListTile(title: Text("Book Eco Trip")),
          if (modules.deliveryEnabled) ListTile(title: Text("Delivery Service")),
        ],
      ),
    );
  }
}
