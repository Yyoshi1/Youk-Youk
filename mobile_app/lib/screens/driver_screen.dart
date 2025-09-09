import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/modules_provider.dart';

class DriverScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final modules = Provider.of<ModulesProvider>(context);
    return Scaffold(
      appBar: AppBar(title: Text("Driver Dashboard")),
      body: ListView(
        children: [
          if (modules.vipEnabled) ListTile(title: Text("VIP Trips")),
          if (modules.sharedEnabled) ListTile(title: Text("Shared Trips")),
          if (modules.ecoEnabled) ListTile(title: Text("Eco Trips")),
          if (modules.deliveryEnabled) ListTile(title: Text("Delivery Requests")),
        ],
      ),
    );
  }
}
