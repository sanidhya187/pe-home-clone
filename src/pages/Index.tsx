import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Scan, 
  Phone, 
  CreditCard, 
  History, 
  Settings,
  Search,
  Plus,
  Eye,
  EyeOff
} from "lucide-react";

const Index = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const recentContacts = [
    { id: 1, name: "Sarah Wilson", phone: "+91 98765 43210", image: "https://images.unsplash.com/photo-1494790108755-2616b9a47a23?w=100&h=100&fit=crop&crop=face", lastAmount: "₹250" },
    { id: 2, name: "Mike Johnson", phone: "+91 87654 32109", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", lastAmount: "₹1,200" },
    { id: 3, name: "Priya Singh", phone: "+91 76543 21098", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", lastAmount: "₹500" },
    { id: 4, name: "Alex Chen", phone: "+91 65432 10987", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", lastAmount: "₹75" },
    { id: 5, name: "Lisa Park", phone: "+91 54321 09876", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face", lastAmount: "₹2,000" },
  ];

  const recentTransactions = [
    { id: 1, type: "sent", to: "Sarah Wilson", amount: "₹250", time: "2 min ago", status: "completed" },
    { id: 2, type: "received", from: "Mike Johnson", amount: "₹1,200", time: "1 hour ago", status: "completed" },
    { id: 3, type: "sent", to: "Coffee Shop", amount: "₹150", time: "3 hours ago", status: "completed" },
    { id: 4, type: "received", from: "Priya Singh", amount: "₹500", time: "Yesterday", status: "completed" },
  ];

  const filteredContacts = recentContacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">john@upi</p>
              </div>
            </div>
            <Settings className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pb-6 space-y-6">
        {/* Balance Card */}
        <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm opacity-90">Available Balance</p>
            <Button
              variant="ghost" 
              size="sm"
              onClick={() => setShowBalance(!showBalance)}
              className="h-8 w-8 p-0 hover:bg-white/20"
            >
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <p className="text-3xl font-bold">
            {showBalance ? "₹12,458.50" : "₹••,•••.••"}
          </p>
          <p className="text-sm opacity-75 mt-1">Bank Account: ***4567</p>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          <Button variant="outline" className="h-16 flex flex-col gap-1 border-2 hover:border-primary/50">
            <Scan className="h-5 w-5" />
            <span className="text-xs">Scan</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1 border-2 hover:border-primary/50">
            <Phone className="h-5 w-5" />
            <span className="text-xs">Pay Phone</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1 border-2 hover:border-primary/50">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs">Bank Transfer</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col gap-1 border-2 hover:border-primary/50">
            <History className="h-5 w-5" />
            <span className="text-xs">History</span>
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search contacts by name or number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-2 focus:border-primary/50"
          />
        </div>

        {/* Recent Contacts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">People</h3>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {filteredContacts.slice(0, 6).map((contact) => (
              <div key={contact.id} className="text-center space-y-2">
                <div className="relative">
                  <Avatar className="h-16 w-16 mx-auto ring-2 ring-primary/20">
                    <AvatarImage src={contact.image} alt={contact.name} />
                    <AvatarFallback className="text-lg">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute -bottom-1 -right-1 text-xs px-1 py-0 min-w-0 bg-green-500 hover:bg-green-500">
                    {contact.lastAmount}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium truncate">{contact.name.split(' ')[0]}</p>
                  <p className="text-xs text-muted-foreground">@{contact.name.toLowerCase().replace(' ', '')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Recent Transactions</h3>
          <Card className="divide-y border-2">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="p-4 flex items-center justify-between hover:bg-accent/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'sent' 
                      ? 'bg-red-500/10 text-red-500' 
                      : 'bg-green-500/10 text-green-500'
                  }`}>
                    {transaction.type === 'sent' ? 
                      <ArrowUpRight className="h-4 w-4" /> : 
                      <ArrowDownLeft className="h-4 w-4" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">
                      {transaction.type === 'sent' ? `To ${transaction.to}` : `From ${transaction.from}`}
                    </p>
                    <p className="text-sm text-muted-foreground">{transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'sent' ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {transaction.type === 'sent' ? '-' : '+'}{transaction.amount}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Send Money Button */}
        <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg">
          Send Money
        </Button>
      </div>
    </div>
  );
};

export default Index;
